import { ADMOB_INTERSTITIAL } from '@env';
import {useEffect, useState} from 'react';
import {TestIds, useInterstitialAd} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : ADMOB_INTERSTITIAL; 

export const useInterstitialAdHook = () => {
  const {isLoaded, isClosed, load, show} = useInterstitialAd(adUnitId);
  const [adShown, setAdShown] = useState(false);

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    if (isClosed) {
      load();
    }
  }, [isClosed]);

  const showAd = () => {
    if (isLoaded) {
      show();
      setAdShown(true);
    } else {
      console.log('Ad is not loaded yet');
    }
  };

  return {showAd, adShown};
};