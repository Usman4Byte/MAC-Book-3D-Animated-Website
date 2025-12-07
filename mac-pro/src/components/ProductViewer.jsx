import clsx from "clsx";
import useMacbookStore from "../store/index.js";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";


const ProductViewer = () => {
  const { color, setColor, scale, setScale } = useMacbookStore();

  const colorOptions = [
    { value: '#adb5bd', label: 'Silver', swatchClass: 'bg-neutral-300' },
    { value: '#2e2c2e', label: 'Space Black', swatchClass: 'bg-neutral-900' },
  ];

  const sizeOptions = [
    { value: 0.06, label: '14"' },
    { value: 0.08, label: '16"' },
  ];

  const selectedColor = colorOptions.find((option) => option.value === color);
  const selectedSize = sizeOptions.find((option) => option.value === scale);

  return (
    <section id="product-viewer">
      <h2 className="text-center">Take a closer look.</h2>

      <div className="controls">
        <p className="info text-center">MacBook Pro {selectedSize?.label ?? '16"'} in {selectedColor?.label ?? 'Space Black'}</p>

        <div className="flex-center gap-5 mt-5">

          <div className="color-control">
            {colorOptions.map(({ value, swatchClass }) => (
              <div
                key={value}
                onClick={() => { setColor(value); }}
                className={clsx(swatchClass, color === value && 'active')}
              />
            ))}
          </div>

          <div className="size-control">
            {sizeOptions.map(({ value, label }) => (
              <div
                key={value}
                onClick={() => { setScale(value); }}
                className={clsx(scale === value ? 'bg-white text-black' : 'bg-transparent')}
              >
                <p>{label}</p>
              </div>
            ))}
          </div>

        </div>

      </div>

      <Canvas id="canvas" camera={{position : [0, 2, 5], fov: 50, near: 0.1, far: 1000}}>
            <Box position={[0, 1, 0]} scale={10*scale} material-color={color}/>    
            <OrbitControls enableZoom={false} />        
      </Canvas>

    </section>
  )
}

export default ProductViewer