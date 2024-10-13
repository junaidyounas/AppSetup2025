import analytics from '@react-native-firebase/analytics';


export const analyticsLog = async (screen: string, description: string) => {
    return await analytics().logEvent(screen, {
        description: description
    });
  };