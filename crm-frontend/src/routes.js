import Dashboard      from './pages/Dashboard';
import Login          from './pages/Login';
import Builder        from './pages/Segments/Builder';
import SegmentList    from './pages/Segments/List';
import CampaignList   from './pages/Campaigns/List';
import CampaignDetail from './pages/Campaigns/Detail';
import CampaignForm   from './components/CampaignForm';

export default {
  dashboard:      Dashboard,
  login:          Login,
  segmentBuilder: Builder,
  segmentList:    SegmentList,
  campaignList:   CampaignList,
  campaignDetail: CampaignDetail,
  campaignForm:   CampaignForm,
};
