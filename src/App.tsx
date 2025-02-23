import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { useReducer } from "react";
import { SearchReducer } from "./reducers/SearchReducer";
import { ResultContext } from "./context/ResultContext";
import { SavedCompanyReducer } from "./reducers/SavedCompanyReducer";
import { SavedCompanyContext } from "./context/SavedCompanyContext";

export const LOCAL_STORAGE_NAME = "savedCompany";

function App() {
  const [resultState, dispatch] = useReducer(SearchReducer, {
    total: {
      value: 0,
    },
    hits: [],
  });

  const [savedCompanyState, savedCompanyDispatch] = useReducer(
    SavedCompanyReducer,
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME) || "[]")
  );

  return (
    <>
      <SavedCompanyContext.Provider
        value={{ savedCompanyState, savedCompanyDispatch }}
      >
        <ResultContext.Provider
          value={{ resultState: resultState, searchDispatch: dispatch }}
        >
          <RouterProvider router={router}></RouterProvider>
        </ResultContext.Provider>
      </SavedCompanyContext.Provider>
    </>
  );
}

export default App;
