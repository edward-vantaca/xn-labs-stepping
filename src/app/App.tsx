import { useCallback, useMemo, useState } from "react";
import VantacaCmpUi from "./imports/VantacaCmpUi";
import XnEditModal from "./components/XnEditModal";
import { EditModalContext } from "./EditModalContext";
import { NavigationContext, type Page } from "./NavigationContext";

export default function App() {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [page, setPage] = useState<Page>("dashboard");
  const openEdit = useCallback(() => setIsEditOpen(true), []);
  const closeEdit = useCallback(() => setIsEditOpen(false), []);
  const navigation = useMemo(() => ({ page, navigate: setPage }), [page]);

  return (
    <NavigationContext.Provider value={navigation}>
      <EditModalContext.Provider value={openEdit}>
        <div className="size-full">
          <VantacaCmpUi />
        </div>
        <XnEditModal open={isEditOpen} onClose={closeEdit} />
      </EditModalContext.Provider>
    </NavigationContext.Provider>
  );
}
