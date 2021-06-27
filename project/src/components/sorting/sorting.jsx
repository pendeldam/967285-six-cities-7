import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {SortTypes} from '../../const';

function Sorting({sortType, setSortType}) {
  const [sortList, setSortList] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex="0" onClick={() => setSortList(true)}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {sortList &&
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(SortTypes).map((type) => (
            <li
              key={type}
              tabIndex="0"
              className={sortType === type
                ? 'places__option places__option--active'
                : 'places__option'}
              onClick={() => {
                setSortList(false);
                setSortType(type);
              }}
            >
              {type}
            </li>
          ))}
        </ul>}
    </form>
  );
}


Sorting.propTypes = {
  sortType: PropTypes.string.isRequired,
  setSortType: PropTypes.func.isRequired,
};

export default Sorting;
