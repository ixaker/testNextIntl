import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/en.json'
  }
});

const config: NextConfig = {
  basePath: ''
};

export default withNextIntl(config);

// import {NextConfig} from 'next';
// import createNextIntlPlugin from 'next-intl/plugin';

// const withNextIntl = createNextIntlPlugin();

// const config: NextConfig = {};

// export default withNextIntl(config);
