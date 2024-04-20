import { Html, useProgress } from "@react-three/drei";
import { useTheme } from "next-themes";

const CanvasLoader = () => {
  const { progress } = useProgress();
  const { theme } = useTheme();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: theme === 'light' ? '000' : "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;