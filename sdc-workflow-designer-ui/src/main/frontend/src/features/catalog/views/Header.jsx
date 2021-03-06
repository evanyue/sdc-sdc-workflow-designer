/*
* Copyright © 2018 European Support Limited
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http: //www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from 'shared/searchInput/SearchInput';
import StatusSelect from './StatusSelector';

const Header = ({ searchChange, searchValue, statusChange, status }) => (
    <div className="header">
        <StatusSelect status={status} onChange={statusChange} />
        <div className="header__search">
            <SearchInput
                dataTestId="wf-catalog-search"
                onChange={searchChange}
                value={searchValue}
            />
        </div>
    </div>
);

Header.propTypes = {
    searchChange: PropTypes.func,
    searchValue: PropTypes.string,
    statusChange: PropTypes.func,
    status: PropTypes.string
};

Header.defaultProps = {
    searchChange: () => {},
    searchValue: ''
};
export default Header;
