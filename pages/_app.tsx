import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';

function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={setupStore()}>
			<Component {...pageProps} />;
		</Provider>
	);
}

export default App;
