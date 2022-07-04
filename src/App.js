import HomePage from "./pages/hompage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostView from "./pages/postview/PostView";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (

      <>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post-view" element={<PostView />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
