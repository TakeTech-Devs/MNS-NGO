import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from 'react-redux';
import { getOther } from '../../Actions/OtherActions';


const MetaData = () => {

  const dispatch = useDispatch();
  const { other, loading, error } = useSelector(state => state.other);

  useEffect(() => {
    dispatch(getOther());
    if (error) {
      window.alert(error)
    }
  }, [dispatch, error])


  return (
    <Helmet>
      <title>{other?.metaTitle}</title>
      {other?.metaIcon?.url && <link rel="icon" href={other?.metaIcon?.url} />}
    </Helmet>
  )
}

export default MetaData
