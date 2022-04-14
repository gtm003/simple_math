import { Routes, Route } from "react-router-dom";
import { GeometryPage } from "../../pages/GeometryPage/GeometryPage";
import { MultiplyTablePage } from "../../pages/MultiplyTablePage/MultiplyTablePage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Layout } from "../Layout/Layout";

import styles from "./App.module.scss";
import { HomePage } from "../../pages/HomePage/HomePage";
import { ChartsPage } from "../../pages/ChartsPage/ChartsPage";

function App() {
  return (
    <div className={styles.app}>
      <DndProvider backend={HTML5Backend}>
        <Layout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/Charts" element={<ChartsPage />} />
            <Route exact path="/Games" element={<MultiplyTablePage />} />
            <Route exact path="/Geometry" element={<GeometryPage />} />
            <Route exact path="/Geometry/:name" element={<GeometryPage />} />
          </Routes>
        </Layout>
      </DndProvider>
    </div>
  );
}

export default App;
