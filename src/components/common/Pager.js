import React from 'react'; import PropTypes from 'prop-types';

const Pager = ({dataList, nextPage, previousPage}) => {
  return (
    <div>
      <button className="btn" type="button"
              disabled={dataList.previous ? '' : 'disabled'}
              onClick={previousPage}
      >Previous</button>
      &nbsp; Page {dataList.page} &nbsp;
      <button className="btn" type="button"
              disabled={dataList.next ? '' : 'disabled'}
              onClick={nextPage}
      >Next</button>
    </div>
  );
};

Pager.propTypes = {
  dataList: PropTypes.object.isRequired,
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired
};

export default Pager;
