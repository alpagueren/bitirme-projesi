import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="default"
          textColor="default"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Misyon ve Vizyon" {...a11yProps(0)} />
          <Tab label="Amacımız" {...a11yProps(1)} />
          <Tab label="İstihdam Olanakları" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        Bölümümüzün Misyonu;

Bilimsel çalışmayı kendine düstur edinen, teknolojiyi takip eden ve sahip olduğu bilgiyi ürüne dönüştürebilen, bilimsel ve teknolojik özgüvene sahip, girişimci, sorgulayıcı, takım çalışmasına uyumlu, etik kurallarını gözeten, uluslararası düzeyde bilgi birikimli, kendisini sürekli yenileyen, analiz ve sentez yapabilen, ülkemizin bilim ve teknolojisinde söz sahibi olan ayrıca ülkemizin gelişimine katkıda bulunacak aydın mühendisler yetiştirmek.

        Bölümümüzün Vizyonu;

Ülkemizin bilim ve teknolojisine yön veren, uluslararası düzeyde kabul gören bir mühendislik bölümü olmak.
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        Tıbbi teşhis ve tedavi uygulamalarından bankacılığa, mühendislikten sosyal bilimlere, telekomünikasyon uygulamalarından hizmet sektörüne, sanattan istatistiksel çalışmalara kadar tüm alanlarda yazılım problemlerini disiplinler arası bir çalışma ile çözümleyebilen mühendisler yetiştirmektir. Bunun için programın uzmanlık derslerinde, yazılım ürünü geliştirilirken önemli olan analiz ve tasarım süreçlerine ayrıntılı olarak odaklanılır;  kodun yazılması, test edilmesi ve ürünün sürekliliğinin sağlanması aşamaları teorik olarak aktarılır.
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        Yazılım mühendisliği mezunları basta yazılım tasarımı, yazılım sınama ve güvenilirliği, yazılım yönetimi ve geliştirmesi, yazılım mimarisi ve çözümlemesi, bilgisayar ağı yazılımı, yazılım destek mühendisliği konularında olmak üzere bilgisayar, enformatik ve iletişim sektörünün işletilmesine yönelik hemen her işlevde öncelikle istihdam edilecek mühendislerdir. Mezunlar çoğunlukla özel sektörde olmakla birlikte, kamu sektöründe de çalışmaktadırlar. Fikir üretimine dayalı bir iş olduğundan, parasal olarak fazla sermayeye ihtiyaç duyulmadığından yeni fikirler üretebilen yazılım mühendislerinin kendi işlerini kurma olanakları da mevcuttur. Yeni mezunlar genellikle ilk yıllarda programcı olarak görev alarak genel işleyişlerle ilgili tecrübe sahibi olurlar.
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}