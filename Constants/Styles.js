import { StyleSheet } from 'react-native';
import { FONTS, SHADOWS, COLORS, SIZES, assets } from './theme';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },

////////////////HEADER AND LOGO///////////////

  LogoView: {
    resizeMode:"cover",
    justifyContent: "space-between",
    alignItems: "center",
    width:150,
    height:150,
  },
  HeaderTitle: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    color: COLORS.primary,
    marginTop: SIZES.base / 2,  
  },

  HeaderTitleView: {
    marginVertical:SIZES.font,
    alignItems:"center",
  },

  Header: {
    backgroundColor: COLORS.white,
    borderColor:COLORS.primary,
    borderBottomWidth:0.5,
    padding: SIZES.font,
    alignItems:"center",
  },

  Header2: {
    backgroundColor: COLORS.white,
    borderColor:COLORS.primary,
    borderBottomWidth:0.5,
    padding: SIZES.font,
  },

  Header3: {
    backgroundColor: COLORS.white,
    borderColor:COLORS.primary,
    borderBottomWidth:0.5,
  },

  HeaderPosition: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:50,
  },

  Logo3View: {
    resizeMode:"cover",
    width:"85%",
    height:"100%",
  },

  LogoDisplay: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:50,
    padding:SIZES.font,   
  },

  SubTitle: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.large,
    color: COLORS.primary,  
  },

  StatusBar: {
    backgroundColor:COLORS.white,
    barStyle:COLORS.primary,
  },

  /////////////////AVATAR//////////////////
  AvatarView: {
    resizeMode:"contain",
    width:"100%",
    height:"100%",
    borderRadius:"100%",
  },

  AvatarSize: {
    width:45,
    height:45,
  },

  AvatarBadge: {
    width:20,
    height:20,
    bottom:0,
    right:0,
    position:"absolute",
    resizeMode:"contain",
  },

//////////////////SEARCH BAR//////////////////////

  SearchBarPosition: {
    width: "100%",
    borderRadius: SIZES.font,
    backgroundColor: COLORS.lightGray,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2,  
  },

  SearchBarLogo: {
    resizeMode:"contain",
    width: 20, 
    height: 20,
    marginRight:SIZES.base,  
  },

  SearchBarText: {
    flex:1,
  },

////////////////PRODUCT RENDER///////////////////////

  PhotoAlign: {
    height: 240,
    alignItems: 'center',
    justifyContent: 'center', 
  },

  Display: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginTop: 32,
  },

  AnimatedView: {
    width: '16%',
    height: 2.4,
    backgroundColor: COLORS.primary,
    opacity:0.5,
    marginHorizontal: 4,
    borderRadius: 100,   
  },

  InfoDisplay: {
    paddingHorizontal: 16,
    marginTop: 6,
  },

  InfoSubDisplay: {
    flexDirection: 'row',
    marginVertical: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  ProductName: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.extraLarge,
    color: COLORS.primary,
    maxWidth:300,  
  },

  ProductPresentation: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.large,
    color: COLORS.primary, 
  },

  CounterAligment: {
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    borderBottomColor:COLORS.primary,
    borderBottomWidth:0.5,
    paddingVertical:SIZES.large,
  },

  Price: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large+3,
    color: COLORS.primary,
  },

  Separator: {
    paddingVertical:SIZES.large,
    borderBottomColor:COLORS.primary,
    borderBottomWidth:0.5,
  },

  SubText: {
    fontFamily:FONTS.regular,
    fontSize: SIZES.medium,
  },

  PriceBig: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large+5,
    color: COLORS.primary,
  },  


});

export default styles;