import reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";

const Reactotron = reactotron
  .configure({ host: '192.168.1.10' })
  .useReactNative()
  .use(reactotronRedux())
  .connect();

export default Reactotron;
