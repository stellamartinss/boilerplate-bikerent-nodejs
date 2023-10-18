require('dotenv').config();
import app from '@/main/config/app';

app.listen(process.env.PORT || 5001, () => {
  console.log('Server running...');
});
