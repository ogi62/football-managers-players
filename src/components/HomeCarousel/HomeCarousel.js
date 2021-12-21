import { Carousel } from 'react-carousel-minimal';

// https://reactjsexample.com/easy-to-use-responsive-and-customizable-carousel-component-for-react/

function HomeCarousel() {
 const data = [
  {
    image: "https://media.gq-magazine.co.uk/photos/5d139a89a624c46d7d4527ed/16:9/w_2560%2Cc_limit/Alex-Ferguson-Arsene-Wenger-02-GQ-31Aug17_pa_b.jpg",
    caption: "Arsene Wenger vs Sir Alex Ferguson"
  },
  {
    image: "https://i.dailymail.co.uk/i/pix/2013/04/21/article-0-196AD91A000005DC-185_964x646.jpg",
    caption: "Champions of England 2001"
  },
   {
      image: "https://www.vbetnews.com/wp-content/uploads/2017/09/real-madrid-2-1-bayer-leverkusen-uefa-champions-league-2001-02-Zidane.jpg",
      caption: "Zidanes famous goal against Leverkusen"
    },
    {
      image: "https://asroma2-cloudinary.corebine.com/asroma2-production/image/upload/c_fill,dpr_3.0,f_webp,g_center,h_430,q_auto,w_768/v1/asroma-uat/ma8qfjmvm5lcrgajkhfv",
      caption: "Romas won Scudetto 2000/01"
    },
    {
      image: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2017/02/24/14879546512929.jpg",
      caption: "Ronaldo to Real Madrid 2002"
    },
    {
      image: "https://sportindepth.com/wp-content/uploads/2020/11/2002-brazil.jpg",
      caption: "Brazil 2002"
    },
    {
      image: "https://e0.365dm.com/20/01/2048x1152/skysports-patrick-vieira-arsene-wenger_4893712.jpg",
      caption: "Arsenal invincibles season 2003/04"
    },
    {
      image: "https://cdn.resfu.com/media/img_news/once-tipo-del-real-madrid-de-los-galacticos--efe.jpg",
      caption: "Galácticos"
    },
    {
      image: "http://3.bp.blogspot.com/-CsX3TQxTEjA/U3-gyJU1T4I/AAAAAAAAAXs/7EiCbuIgUHY/s1600/m-portotransfers114_v-gseagaleriexl.jpg",
      caption: "Fc Porto UCL winners 2004"
    },
    {
      image: "https://icdn.chelsea-news.co/wp-content/uploads/2019/06/Frank-Lampard-Roman-Abramovich.jpg",
      caption: "Chelsea celebrating second title 2005"
    },
    
    {
      image: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2006/03/25/264630-24489994-2560-1440.jpg",
      caption: "Juventus players 2005 before calciopoli scandal"
    },
    {
      image: "https://tmssl.akamaized.net/images/foto/galerie/fc-liverpool-champions-league-sieger-2005-1584711821-34384.jpg?lm=1584711841",
      caption: "Liverpool UCL winners, Istanbul 2005"
    },
    {
      image: "https://editorial.uefa.com/resources/0253-0d7acea51b3e-538c63dae08a-1000/barcelona_revel_in_their_final_success_in_paris.jpeg",
      caption: "Barcelona UCL winner 2006"
    },
    {
      image: "https://theoffsiderulepodcast.files.wordpress.com/2020/04/marcello-lippi.jpg",
      caption: "Marcelo Lippi after the final of World Cup 2006"
    },
    
    {
      image: "https://sportslens.com/wp-content/uploads/2020/10/milan-derby-sansiro-1024x672.jpg",
      caption: "Derby Della Madonnina"
    },
    {
      image: "https://www.thesportsman.com/media/images/admin/football/original/AC_Milan_1.jpg",
      caption: "Inter 0-3 Milan 2005 Derby Della Madonnina"
    },
    
    {
      image: "https://editorial.uefa.com/resources/025d-0f55e0845698-5dae4c26c021-1000/bt_sport._football._uefa_champions_league_final._athens._23rd_may_2007._ac_milan_2_v_liverpool_1._ac_milan_celebrate_with_the_trophy_with_captian_paolo_maldini_and_goal_scorer_filippo_inzaghi_centre..jpeg",
      caption: "Ac Milan UCL winners 2007"
    },
    {
      image: "https://i2-prod.birminghammail.co.uk/incoming/article18310516.ece/ALTERNATES/s1200c/0_Jose-Milan-2010.jpg",
      caption: "Jose Mourinho manager of Inter 2009"
    },
    {
      image: "https://eu-images.contentstack.com/v3/assets/bltcc7a7ffd2fbf71f5/blt68ec3f9bbaed8d9c/60dc4310bcc58b0f8f8b2f8d/b10fa4a9086953d85d62a32e116076e2f6c05541.jpg?auto=webp&fit=crop&format=jpg&quality=100",
      caption: "Cristiano Ronaldo transfer to Real Madrid in summer 2009"
    },
    {
      image: "https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/uruguay-v-netherlands-2010-fifa-world-cup-semi-final-5b1aa738f7b09df37f000005.jpg",
      caption: "Golden Ball Winner Diego Forlan 2010"
    },
    {
      image: "https://www.irishtimes.com/polopoly_fs/1.2657879.1464022210!/image/image.jpg",
      caption: "Pep vs Jose"
    },
    {
      image: "https://cdn.vox-cdn.com/thumbor/-WIrUe-VOZVS74n-GOKwXhpswC4=/0x0:4256x2706/1400x1400/filters:focal(2070x1006:2750x1686):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/51305115/114916541.0.jpg",
      caption: "Barcelona Champions League 2011"
    },
    {
      image: "https://ca-times.brightspotcdn.com/dims4/default/bd7f689/2147483647/strip/true/crop/1704x1036+0+0/resize/1486x903!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F5e%2Fbc%2F9493af4a594b771ba980d1573d09%2Fla-xpm-photo-2013-may-12-la-sp-sn-alex-ferguson-final-match-20130512",
      caption: "Sir Alex's last game at Old Trafford"
    },
    {
      image: "https://s.bundesliga.com/assets/img/1170000/1169242_imgw968.jpg",
      caption: "Arjen Robben scores goal against Borussia Dortmund 2013"
    },
    {
      image: "https://i.huffpost.com/gen/1815591/images/o-SERGIO-RAMOS-facebook.jpg",
      caption: "Ramos late equalizer in the 93th minute of the UCL final"
    },
    {
      image: "https://pbs.twimg.com/media/DciHLmKX0AAxTAn.jpg",
      caption: "Juventus players who won 7 Scudettos"
    },
    {
      image: "https://eu-images.contentstack.com/v3/assets/bltcc7a7ffd2fbf71f5/blt9bbb9fe66f2c13dd/60df231b9d95714c02390d87/851eee1935d69052bc0340e1a466a41fc9453353.jpg?auto=webp&fit=crop&format=jpg&quality=100",
      caption: "Big rivals Diego Simeone and Zidane"
    },
    {
      image: "https://ichef.bbci.co.uk/images/ic/1920x1080/p03tss5r.jpg",
      caption: "Champions of England 2015/16"
    },
    {
      image: "https://www.telegraph.co.uk/content/dam/football/2019/09/01/TELEMMGLPICT000207950698_trans_NvBQzQNjv4BqKjggCdpvXjoraOzAlyzu1Oy2J3UvWd4k5utKGy_UMGI.jpeg",
      caption: "Manchester City stars"
    },
    {
      image: "https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/juventus-v-real-madrid-uefa-champions-league-final-5c1a6cbb12edfca9ee000001.jpg",
      caption: "Cristiano Ronaldo goal against Juventus 2017"
    },
    {
      image: "https://pbs.twimg.com/media/EcOga-AWAAAUabd.jpg",
      caption: "Real Madrid vs Juventus UCL final 2017 (4-1)"
    },
    {
      image: "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0630%2Fr394339_1296x729_16%2D9.jpg",
      caption: "France vs Argentina World Cup"
    },
    {
      image: "https://resources.premierleague.com/premierleague/photo/2020/07/22/32920c7a-7be0-498b-b97b-aec77e46e6b4/2020-07-22T215855Z_652375471_UP1EG7M1P279J_RTRMADP_3_SOCCER-ENGLAND-LIV-CHE-REPORT.JPG",
      caption: "Liverpool won Premier League 2019/20"
    },

    
  ];

  const captionStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    // display: 'none',
  }
  
  return (
    <div className="App">
        <div style={{
          width: "100%",
          marginBottom:"10rem",
        }}>
          <Carousel
            data={data}
            time={3000}
            width="100%"
            height="calc(120vh - 3rem)"
            captionStyle={captionStyle}
            slideNumber={false}
            captionPosition="bottom"
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            // thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              // maxHeight: "500px",
              margin: "0rem auto 4rem auto",
            }}
          />
        </div>
    </div>
  );
}

export default HomeCarousel;
