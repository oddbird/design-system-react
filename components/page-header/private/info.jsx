/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */
/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const displayName = 'PageHeaderInfo';
const propTypes = {
	/**
	 * Contents of info section
	 */
	children: PropTypes.node,
	/**
	 * Optional class name
	 */
	className: PropTypes.string,
};

const Info = (props) => (
	<span className={classnames(props.className)}>{props.children}</span>
);

Info.displayName = displayName;
Info.propTypes = propTypes;

export default Info;
