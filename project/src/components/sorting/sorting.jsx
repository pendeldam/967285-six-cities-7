import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getSortType} from '../../store/app-data/selectors';
import {setSortType} from '../../store/action';
import {SortTypes} from '../../const';

function Sorting() {
  const [sortList, setSortList] = useState(false);
  const dispatch = useDispatch();
  const sortType = useSelector(getSortType);

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
                dispatch(setSortType(type));
              }}
            >
              {type}
            </li>
          ))}
        </ul>}
    </form>
  );
}

export default Sorting;
