import '../Css/style.css';
import '../Css/modern_normalize.css';
import '../Css/components/header.css';
import '../Css/components/head.css';
import '../Css/components/about.css';
import '../Css/components/feature.css';
import '../Css/components/work.css';
import '../Css/components/contact.css';
import '../Css/components/footer.css';
import '../Css/components/mobile_nav.css';
// the utils.css must be the last one since its the most priority of them all or else this css will not work
import '../Css/utils.css';

import mobileenav from './utils/mobile-nav';
import ThemeMode from './utils/theme';
import Loaderload from './utils/loader-load';

mobileenav();
ThemeMode();
Loaderload();