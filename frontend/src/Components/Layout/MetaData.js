import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from 'react-redux';
import { getOther } from '../../Actions/OtherActions';


const MetaData = () => {

    const dispatch = useDispatch();
    const { other, loading: otherLoading, error: otherError } = useSelector(state => state.other);

    useEffect(() => {
        dispatch(getOther());
        if(otherError){
            window.alert(otherError)
        }
    }, [dispatch, otherError])

  return (
    <Helmet>
      <title>{other?.metaTitle}</title>
      {other?.metaIcon?.url && <link rel="icon" href={other?.metaIcon?.url} />}
    </Helmet>
  )
}

export default MetaData
