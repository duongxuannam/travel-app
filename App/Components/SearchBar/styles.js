
export default {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  center: {
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-start',
  },
  searchBar: {
    flex: 1,    
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  txtSearch: {
    flex: 1,
    color: 'white',
    fontSize: 15,
  },
  btnSearch: {
    color: 'white',
    backgroundColor:'transparent',
    paddingHorizontal: 5,
    marginRight: 5,
    paddingVertical: 5,
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtBtnSearch: {
    color: 'white',
    fontSize: 15,
  },
  closeIconStyle: {
    color: 'white',
    backgroundColor:'transparent',
  },
  placeholderTextColor: 'white',
}