import React, { useCallback, useMemo } from 'react';

function App(props){
  const {
    from,
    to,
    isCitySelectorVisible,
    isDateSelectorVisible,
    cityData,
    isLoadingCityData,
    highSpeed,
    dispatch,
    departDate,
  } = props;

  const onBank = useCallback(() => {
    window.history.back();
  },[])

  const cbs = useMemo(() => {
    return bindActionCreators(
      {
        exchangeFormTo,
        showCitySelector,
      },
      dispatch
    );
  },[]);

}