"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import isoFetch from 'isomorphic-fetch';

import MobileCompany from '../components/MobileCompany';
import MobileCompany2 from '../components/MobileCompany2';
import { withDataLoad } from '../components/withDataLoad';

import Test from '../components/Test';
import clients from '../clients';

let sp = new URLSearchParams();
    sp.append('f', 'READ');
    sp.append('n', 'ZHIDOVICH_TEST_INFO_FD3');

export default class Page_Clients extends React.PureComponent {
    
    
  fetchConfig={    
    URL: "https://fe.it-academy.by/AjaxStringStorage2.php",
    method: 'post',
    headers: {
        "Accept": "application/json",
    },
    body: sp,
  };

  // HOC возвращает каждый раз НОВЫЙ, обёрнутый компонент
  // поэтому оборачивать в HOC лучше не внутри render, чтобы не рендерить каждый раз НОВЫЙ компонент
  MobileCompanyWithData=withDataLoad(this.fetchConfig,"companyData")(MobileCompany2);

    render() {
        let MobileCompanyWithData=this.MobileCompanyWithData;
        return  <React.Fragment>
                    <MobileCompany clients={clients}/>
                    
                    <MobileCompanyWithData/>
                </React.Fragment>
        
    }
}
// let sp = new URLSearchParams();
//     sp.append('f', 'READ');
//     sp.append('n', 'ZHIDOVICH_TEST_INFO');
//     isoFetch("https://fe.it-academy.by/AjaxStringStorage2.php", {
//         method: 'post',
//         headers: {
//             "Accept": "application/json",
//         },
//         body: sp,        
//     })