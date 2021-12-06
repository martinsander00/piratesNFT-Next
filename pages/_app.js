import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.css';
import  {motion} from 'framer-motion';


function MyApp({ Component, pageProps }) {
  return(
    <div className="page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
          <Component {...pageProps} />
      </motion.div>
    </div>
  );
}

export default MyApp
