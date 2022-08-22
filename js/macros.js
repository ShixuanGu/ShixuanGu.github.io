const VEXU_RULE201819 = "https://www.roboticseducation.org/vrc-history-2018-2019-turning-point/"
const VEXU_WORLD_CHAMPION2019 = "https://www.robotevents.com/robot-competitions/college-competition/RE-VEXU-18-6071.html#awards"
const VEXU_CHINA_CHAMPION2018 = "https://www.robotevents.com/robot-competitions/college-competition/RE-VEXU-18-5381.html#awards"

const IYPT = "https://www.iypt.org/"

const DISSERTATION_PDF = "https://drive.google.com/file/d/1-cUlfdSXbekzRZB4FO3OEmdSi3i-MoaT/view";

const NLT_PROJECT = "http://nlt.csail.mit.edu/";

const MOSCULP_PROJECT = "http://mosculp.csail.mit.edu/";
const MOSCULP_PHOTOS = "https://photos.app.goo.gl/HkTbsYtXQXxBo8up6";
const MOSCULP_FORBES = "https://www.forbes.com/sites/jenniferhicks/2018/09/25/these-researchers-turned-2d-videos-into-3d-motion-sculptures";
const MOSCULP_BBC = "https://www.bbc.com/news/av/technology-45552015/creating-3d-sculptures-from-2d-video-and-other-news";
const MOSCULP_MIT = "https://news.mit.edu/2018/creating-3-d-printed-motion-sculptures-from-2-d-videos-mit-csail-0919";
const MOSCULP_MIT_HOMEPAGE = "assets/mosculp/mit_homepage.png";

const GENRE_PROJECT = "http://genre.csail.mit.edu/";

const AD_PAPER = "http://dx.doi.org/10.1073/pnas.1611073113";
const AD_NUS = "http://news.nus.edu.sg/highlights/model-illuminates-alzheimers-disease";
const AD_PT = "https://www.psychologytoday.com/intl/blog/the-athletes-way/201610/alzheimers-study-links-triad-brain-areas-cognition";
const AD_MGH = "assets/ad_factors/mgh.pdf";

const MIT_RED = "#A31F34";
const MIT_DARK_GRAY = "#8A8B8C";
const MIT_LIGHT_GRAY = "#C2C0BF";


function clickme(text, link) {
  document.write("<a target='_blank' href=" + link + ">" + text + "</a>");
}

function clickable(text, link) {
  document.write("<a class='lowkey' target='_blank' href=" + link + ">" + text + "</a>");
}

function text_button(text, link) {
  clickable("[" + text + "]", link);
}

function undef() {
  document.write("<font color='#FF0000'>UNDEFINED</font>");
}

function getPerson(id) {
  switch(id) {
    case "me":
      document.write("<u>Shixuan Gu</u>");
      break;
    case "choset":
        clickable("Howie Choset", "http://www.cs.cmu.edu/~choset/");
        break;
    case "hanspeter":
      clickable("Hanspeter Pfister", "https://vcg.seas.harvard.edu/people");
      break;
    case "donglai":
        clickable("Donglai Wei", "https://donglaiw.github.io/");
        break;
    case "bingbing":
      clickable("Bingbing Ni", "https://scholar.google.com/citations?user=eUbmKwYAAAAJ");
      break;
    case "jiancheng":
      clickable("Jiancheng Yang", "https://jiancheng-yang.com/");
      break;   
    case "keith":
      clickable("Keith E. Cook", "https://www.cmu.edu/bme/People/Faculty/profile/kcook.html");
      break;   
    case "mingli":
      clickable("Ming Li", "https://www.researchgate.net/profile/Ming-Li-50");
      break;   
    case "kaiming":
      clickable("Kaiming Kuang", "https://kaimingkuang.github.io/");
      break;   
    case "jasonbc":
      clickable("Jason Ken Adhinarta", "https://github.com/jasonkena");
      break;  
    case "jeffharvard":
      clickable("Jeff W. Lichtman", "https://lichtmanlab.fas.harvard.edu/people/jeff-lichtman");
      break;     
    case "dylan":
      clickable("Dylan Thomas", "https://en.wikipedia.org/wiki/Dylan_Thomas");
      break;     
      
    default:
      undef();
  }
}

function getVenue(id) {
  switch(id) {
    case "iccv":
      clickable("ICCV", "https://en.wikipedia.org/wiki/International_Conference_on_Computer_Vision");
      break;
    case "iypt":
      clickable("IYPT", IYPT);
      break;
      case "iypt_full":
        clickable("International Young Physicists' Tournament", IYPT);
        break;
    case "nips":
      clickable("NeurIPS", "https://en.wikipedia.org/wiki/Conference_on_Neural_Information_Processing_Systems");
      break;
    case "c9+1_2018":
      clickable("2018 Student Learning Festival of C9+1 Symposium", "https://tl.hku.hk/c91-2018/");
      break;
    
    default:
      undef();
  }
}

function getAffli(id) {
  switch(id) {
    case "cmu":
      clickable("Carnegie Mellon University (CMU)", "https://www.cmu.edu/");
      break;
    case "cmu_full":
      clickable("Carnegie Mellon University", "https://www.cmu.edu/");
      break;
    case "cmu_short":
      clickable("CMU", "https://www.cmu.edu/");
      break;
    case "biorobotics":
      clickable("Biorobotics Lab", "https://www.ri.cmu.edu/robotics-groups/biorobotics/");
      break;
    case "vcg":
      clickable("Visual Computing Group", "https://vcg.seas.harvard.edu/");
      break;
    case "ieee_class":
      clickable("IEEE Honor Class", "https://english.seiee.sjtu.edu.cn/english/info/8338.htm");
      break;
    case "sjtu":
      clickable("Shanghai Jiao Tong University (SJTU)", "https://en.sjtu.edu.cn/");
      break;    
    case "sjtu_full":
      clickable("Shanghai Jiao Tong University", "https://en.sjtu.edu.cn/");
      break;
    case "harvard":
      clickable("Harvard University", "https://www.harvard.edu/");
      break;
    case "recf":
      clickable("Robotics Education & Competition Foundation", "https://www.roboticseducation.org/");
      break;
    case "hku":
      clickable("The University of Hong Kong", "https://www.hku.hk/");
      break;
    case "ucla_extension":
      clickable("UCLA Extension", "https://www.uclaextension.edu/");
      break;
      
    default:
      undef();
  }
}

function getNews(id) {
  switch(id) {
    case "mosculp_bbc":
      clickme("BBC", MOSCULP_BBC);
      break;
    case "vex2019_award":
      clickable("VEX U Skills Challenge World Champion, VEX U Division Champion, and World Finalist", VEXU_WORLD_CHAMPION2019);
      break;
    case "vex2019_event":
      clickable("2019 VEX U Robotics World Championship", VEXU_WORLD_CHAMPION2019);
      break;
    case "vex2018_china_event":
      clickable("2018 China National VEX Robotics Competition", VEXU_CHINA_CHAMPION2018);
      break;
    case "vex2018_china_award":
      clickable("Nomination for Excellence Award, Amaze Award, Tournament Semifinalists", VEXU_CHINA_CHAMPION2018);
      break;

      
    default:
      undef();
  }
}

function paper(link) {
  text_button("paper", link);
}

function dataset(link) {
  text_button("dataset", link);
}

function poster(link) {
  text_button("poster", link);
}

function video(link) {
  text_button("video", link);
}

function talk(link) {
  text_button("talk", link);
}

function thesis(link) {
  text_button("thesis", link);
}

function code(link) {
  text_button("code", link);
}

function demo(link) {
  text_button("demo", link);
}

function doc(link) {
  text_button("doc", link);
}

function supp(link) {
  text_button("supp", link);
}

function project(link) {
  text_button("project", link);
}

function startupproject(link) {
  text_button("startup project", link);
}

function bibtex(link) {
  text_button("bibtex", link);
}

function patent(link) {
  text_button("patent", link);
}

function hl(text) {
  document.write(`<font color=${MIT_RED}>${text}</font>`);
}
