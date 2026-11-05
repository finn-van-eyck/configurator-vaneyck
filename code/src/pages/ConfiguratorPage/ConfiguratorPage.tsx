import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Experience from "../../components/canvas/Experience/Experience";
import LoadingScreen from "../../components/ui/LoadingScreen/LoadingScreen";
import StudioHeader from "../../components/ui/StudioHeader/StudioHeader";
import StepHeading from "../../components/ui/StepHeading/StepHeading";
import ProgressSteps from "../../components/ui/ProgressSteps/ProgressSteps";
import OptionRail from "../../components/ui/OptionRail/OptionRail";
import styles from "./ConfiguratorPage.module.css";
import TotalPrice from "../../components/ui/TotalPrice/TotalPrice";

const ConfiguratorPage = () => {
  return (
    <main className={styles.configurator}>
      <div className={styles.configurator__canvas}>
        <Canvas camera={{ fov: 32, position: [24, 12, 34] }} dpr={1}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </Canvas>
      </div>

      <StudioHeader />
      <StepHeading />
      <OptionRail />
      <ProgressSteps />
      <TotalPrice />
      <LoadingScreen />
    </main>
  );
};

export default ConfiguratorPage;
