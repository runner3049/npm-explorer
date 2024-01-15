import Box from '@mui/material/Box';
import SearchForm from '../../common/SearchForm/SearchForm';
import DiscoverPackages from './DiscoverPackages/DiscoverPackages';
import Downloads from './Downloads/Downloads';
import Link from '../../common/Link/Link';
import Logo from '../../common/Logo/Logo';

export default function HomePage() {
  return (
    <Box>
      <Box
        component={'header'}
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          gap: 4,
          px: 4,
          py: 2,
        }}
      >
        <Link to="/">
          <Logo/>
        </Link>
        <SearchForm />
      </Box>
      <Box
        component="main"
        sx={{
          px: 4,
          py: 2,
          backgroundColor: '#fafafa',
        }}
      >
        <Box sx={{
          backgroundColor: '#fff',
          border: '1px solid rgba(0,0,0,.1)',
          borderRadius: '0.25rem',
          display: 'flex',
          gap: 4,

        }}>
          <DiscoverPackages />
          <Downloads />
        </Box>
      </Box>
    </Box>
  );
}