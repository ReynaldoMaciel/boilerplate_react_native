import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

const reactotron = Reactotron.configure()
  .use(reactotronRedux())
  .useReactNative({
    asyncStorage: true,
    devTools: false,
    networking: {
      ignoreUrls: /symbolicate/,
    },
    editor: false, // there are more options to editor
    overlay: false, // just turning off overlay
  })
  .connect()

export default reactotron
