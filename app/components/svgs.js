import Svg from 'react-native-svg';
import Path from 'react-native-path';

const CircleArrow = props => (
    <Svg width={24} height={15} viewBox="0 0 24 15" fill="none" {...props}>
      <Path
        d="M23.1 6.933L15.9.172a.502.502 0 00-.68 0 .431.431 0 000 .637l6.381 5.992H.68c-.265 0-.48.201-.48.45 0 .25.215.451.48.451h20.921l-6.38 5.992a.431.431 0 000 .637.495.495 0 00.339.132.495.495 0 00.34-.132l7.2-6.76a.431.431 0 000-.638z"
        fill="#F2E0F5"
      />
    </Svg>
  );

  const FacebookIcon = props => (
    <Svg width={19} height={19} viewBox="0 0 19 19" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.883 0A2.883 2.883 0 000 2.883v13.234A2.883 2.883 0 002.883 19h13.234A2.883 2.883 0 0019 16.117V2.883A2.883 2.883 0 0016.117 0H2.883zm4.61 18.877V12.44h-2.97V9.41h2.97V7.102c0-2.626 1.745-4.077 4.416-4.077 1.28 0 2.617.205 2.617.205v2.578h-1.474c-1.452 0-1.905.808-1.905 1.636v1.967h3.242l-.518 3.03h-2.724v6.436H7.493z"
        fill="#F2E0F5"
      />
    </Svg>
  );

  const GoogleIcon = props => (
    <Svg width={21} height={20} viewBox="0 0 21 20" fill="none" {...props}>
      <Path
        d="M20.88 10.168c0 5.658-4.003 9.684-9.915 9.684C5.297 19.852.72 15.422.72 9.936.72 4.45 5.297.02 10.965.02c2.76 0 5.082.98 6.87 2.595L15.047 5.21C11.399 1.803 4.616 4.362 4.616 9.936c0 3.458 2.854 6.261 6.35 6.261 4.056 0 5.576-2.814 5.816-4.274h-5.817v-3.41h9.754c.095.507.161.995.161 1.655z"
        fill="#F2E0F5"
      />
    </Svg>
  );

export default {CircleArrow, FacebookIcon, GoogleIcon};
