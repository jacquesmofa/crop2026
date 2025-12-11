import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { Suspense } from "react";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-navy">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white font-medium">Loading...</p>
            </div>
          </div>
        }>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
