import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { useState } from "react";
import { UserModal } from "./components/UserModal";
import { RecsModal } from "./components/RecsModal";

Modal.setAppElement('#root');

export function App() {

  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isRecsModalOpen, setIsRecsModalOpen] = useState(false);

  function handleOpenUserModal() {
      setIsUserModalOpen(true);
  }

  function handleCloseUserModal() {
      setIsUserModalOpen(false);
  }

  function handleOpenRecsModal() {
    setIsRecsModalOpen(true);
}

function handleCloseRecsModal() {
    setIsRecsModalOpen(false);
}

  return (
    <>
      <Header onOpenUserModal={handleOpenUserModal} onOpenRecsModal={handleOpenRecsModal} />
      <Dashboard />
      <UserModal 
        isOpen={isUserModalOpen}
        onRequestClose={handleCloseUserModal}
      />
      <RecsModal 
        isOpen={isRecsModalOpen}
        onRequestClose={handleCloseRecsModal}
      />
      <GlobalStyle />
    </>
  );
}

export default App;