import { io } from "socket.io-client";
import { getAuth } from "firebase/auth";

const socket = io("http://localhost:5000", {
  autoConnect: false,
});

export const connectSocket = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    const token = await user.getIdToken();
    socket.auth = { token };
    socket.connect();
  }
};

export default socket;
