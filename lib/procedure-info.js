'use strict';
var sql = require('mssql');
var procedureNames = {};

function ProcedureInfo() {}
ProcedureInfo.prototype.setProcedureInfo = function (
  procedureName,
  procedureInfo

) {
  if (procedureInfo.hasOwnProperty(procedureName)) {
    console.error(procedureName + '은 이미 지정되어 있습니다.');
    return;
  } else {
    this[procedureName] = procedureInfo;
  }
};
var procedureInfo = new ProcedureInfo();

var currentName = 'SA_LOGIN_PROCESS';
var currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'D_PASS',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'D_IP',
      type: sql.VarChar(20),
      required: true,
    },
    {
      name: 'D_BROWSER',
      type: sql.VarChar(50),
      required: true,
    },
    {
      name: 'D_OS',
      type: sql.VarChar(50),
      required: true,
    },
    {
      name: 'D_COUNTRY',
      type: sql.VarChar(50),
      required: true,
    },
  ],
};
procedureNames['adminLogin'] = {
  name: currentName,
  returnName: 'ADSIGNIN',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);






currentName = 'SA_TRADE_FEE_LIST';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER1_TITLE',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'SECHER_TEXT',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'GUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'SITE_CODE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'TRADE_GUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.NVarChar(10),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.NVarChar(10),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureNames['getTradeFeeList'] = {
  name: currentName,
  returnName: 'TRADFEELIST',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);



currentName = 'SA_TRX_COIN_COMFORM';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'MS_TXID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'MS_KEY',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureNames['admin_trxtransfor'] = {
  name: currentName,
  returnName: 'ADMINCOMFORM',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);


currentName = 'SA_TRADE_FEE_LIST_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER1_TITLE',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'SECHER_TEXT',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'GUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'SITE_CODE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'TRADE_GUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.NVarChar(10),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.NVarChar(10),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_COIN_TRADE_HIS';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'TRADE_SECHER',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'TRADE_TEXT',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'TRADE_GUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'GUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CGUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.NVarChar(10),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.NVarChar(10),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureNames['getTradeList'] = {
  name: currentName,
  returnName: 'TRADLIST',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_COIN_TRADE_IMG_HIS';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'TRADE_SECHER',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'TRADE_TEXT',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'TRADE_GUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'GUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CGUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.NVarChar(10),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.NVarChar(10),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureNames['getTradeList_img'] = {
  name: currentName,
  returnName: 'TRADLIST_IMG',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_COIN_SELL';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'A_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'A_NO',
      type: sql.Int,
      required: true,
    },
    {
      name: 'GUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'ORDER_COIN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'STAN_COIN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'QTY',
      type: sql.Decimal(18, 2),
      required: true,
    },
    {
      name: 'RATE',
      type: sql.Decimal(18, 2),
      required: true,
    },
    {
      name: 'AMOUNT',
      type: sql.Decimal(18, 2),
      required: true,
    },
    {
      name: 'FEE',
      type: sql.Decimal(18, 2),
      required: true,
    },
    {
      name: 'BANK_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureNames['coinSell'] = {
  name: currentName,
  returnName: 'COINSELL',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
currentName = 'SA_COIN_LIST';
currentInfo = {
  usingCache: false,
  params: [],
};
procedureNames['getCoinList'] = {
  name: currentName,
  returnName: 'COINLIST',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
currentName = 'SA_COM_UID_LIST';
currentInfo = {
  usingCache: false,
  params: [],
};
procedureNames['getComUidList'] = {
  name: currentName,
  returnName: 'COMUIDLIST',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_ADMIN_BANK_LIST';
currentInfo = {
  usingCache: false,
  params: [],
};
procedureNames['getAdminBankList'] = {
  name: currentName,
  returnName: 'ADMINBANKLIST',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_COIN_TRADE_HIS_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'TRADE_SECHER',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'TRADE_TEXT',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'TRADE_GUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'GUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CGUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.NVarChar(10),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.NVarChar(10),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_MEMBER_LIST';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER1_TITLE',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'SECHER_TEXT',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.NVarChar(10),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.NVarChar(10),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureNames['AgetMemberList'] = {
  name: currentName,
  returnName: 'MEMBERLIST',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_COM_BANK_SET';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_AID',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'USE_YN',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'COUNTRY',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'SITE_COIN',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'B_CODE',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'B_IDNO',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'B_OWNER',
      type: sql.NVarChar(50),
      required: true,
    },
  ],
};
procedureNames['addAdminBank'] = {
  name: currentName,
  returnName: 'ADMINBANK',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_COM_FEE_SET';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SGUBUN',
      type: sql.NVarChar(10),
      required: true,
    },
    {
      name: 'RATE',
      type: sql.Decimal(18, 2),
      required: true,
    },
    {
      name: 'STATE',
      type: sql.NVarChar(1),
      required: true,
    },
    {
      name: 'SDATE',
      type: sql.NVarChar(10),
      required: true,
    },
    {
      name: 'EDATE',
      type: sql.NVarChar(10),
      required: true,
    },
    {
      name: 'STANCOIN',
      type: sql.NVarChar(10),
      required: true,
    },
    {
      name: 'AD_UID',
      type: sql.NVarChar(50),
      required: false,
    },
  ],
};
procedureNames['addAdminfee'] = {
  name: currentName,
  returnName: 'ADMINFEESET',
};

procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_CURR_RRATE_SET';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'GUBUN',
      type: sql.NVarChar(10),
      required: true,
    },
    {
      name: 'RATE',
      type: sql.Decimal(18, 2),
      required: true,
    },
    {
      name: 'STATE',
      type: sql.NVarChar(1),
      required: true,
    },
    {
      name: 'SDATE',
      type: sql.NVarChar(10),
      required: true,
    },
    {
      name: 'EDATE',
      type: sql.NVarChar(10),
      required: true,
    },
    {
      name: 'AD_UID',
      type: sql.NVarChar(50),
      required: false,
    },
  ],
};
procedureNames['addCurrrate'] = {
  name: currentName,
  returnName: 'CURRRATESET',
};

procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_BANK_LIST';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'COUNTRY_CODE',
      type: sql.NVarChar(50),
      required: true,
    },
  ],
};
procedureNames['getBankList'] = {
  name: currentName,
  returnName: 'BANKLIST',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_COUNTRY';
currentInfo = {
  usingCache: false,
  params: [],
};
procedureNames['getCountry'] = {
  name: currentName,
  returnName: 'COUNTRYLIST',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_MEMBER_LIST_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER1_TITLE',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'SECHER_TEXT',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.NVarChar(10),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.NVarChar(10),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_MEMBER_DETAIL_DNO';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'DNO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureNames['AgetMemberDetail'] = {
  name: currentName,
  returnName: 'MEMBERD',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_MEMBER_UPDATE';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.VarChar(50),
      required: true,
    },
    {
      name: 'D_NAME',
      type: sql.VarChar(50),
      required: true,
    },
    {
      name: 'D_HP',
      type: sql.VarChar(50),
      required: true,
    },
    {
      name: 'D_EMAIL',
      type: sql.VarChar(50),
      required: true,
    },
    {
      name: 'D_PASS',
      type: sql.VarChar(50),
      required: true,
    },
  ],
};
procedureNames['AupdateMember'] = {
  name: currentName,
  returnName: 'UPDATEMEMBER',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_BOARD_MAIN_UPDATE';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'BIDX',
      type: sql.Int,
      required: true,
    },
    {
      name: 'B_GUBUN',
      type: sql.VarChar(100),
      required: true,
    },
    {
      name: 'B_TITLE',
      type: sql.NVarChar(400),
      required: true,
    },
    {
      name: 'B_CONTENTS',
      type: sql.NText,
      required: true,
    },
    {
      name: 'B_FILE_PATH1',
      type: sql.VarChar(100),
      required: true,
    },
    {
      name: 'B_FILE_PATH2',
      type: sql.VarChar(100),
      required: true,
    },
    {
      name: 'B_FILE_PATH3',
      type: sql.VarChar(100),
      required: true,
    },
    {
      name: 'B_FILE_PATH4',
      type: sql.VarChar(100),
      required: true,
    },
    {
      name: 'B_FILE_PATH5',
      type: sql.VarChar(100),
      required: true,
    },
  ],
};
procedureNames['boardUpdate'] = {
  name: currentName,
  returnName: 'BOARDWRITE',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_BOARD_MAIN_WRITE';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'B_UID',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'B_GUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_TITLE',
      type: sql.NVarChar(400),
      required: true,
    },
    {
      name: 'B_CONTENTS',
      type: sql.NText,
      required: true,
    },
    {
      name: 'B_COUNTRY',
      type: sql.NVarChar(2),
      required: true,
    },
    {
      name: 'B_FILE_PATH1',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_FILE_PATH2',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_FILE_PATH3',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_FILE_PATH4',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_FILE_PATH5',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureNames['boardWrite'] = {
  name: currentName,
  returnName: 'BOARDWRITE',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_BOARD_REPLY_WRITE';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'B_UID',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'B_GUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_IDX',
      type: sql.BigInt,
      required: true,
    },
    {
      name: 'B_TITLE',
      type: sql.NVarChar(400),
      required: true,
    },
    {
      name: 'B_CONTENTS',
      type: sql.NText,
      required: true,
    },
    {
      name: 'B_FILE_PATH1',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_FILE_PATH2',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_FILE_PATH3',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_FILE_PATH4',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_FILE_PATH5',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_AID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_ANAME',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_COUNTRY',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureNames['repBoard'] = {
  name: currentName,
  returnName: 'REPBOARD',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_BOARD_MAIN_VIEW';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'B_UID',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'B_GUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_IDX',
      type: sql.BigInt,
      required: true,
    },
  ],
};
procedureNames['getBoardView'] = {
  name: currentName,
  returnName: 'BOARDVIEW',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_TRADE_HIS_DETAIL';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'M_UID',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'IDX',
      type: sql.BigInt,
      required: true,
    },
  ],
};
procedureNames['getTRDDet'] = {
  name: currentName,
  returnName: 'TRDDET',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_COIN_USE_CHANGE';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'IDX',
      type: sql.BigInt,
      required: true,
    },
  ],
};
procedureNames['setFeeBook'] = {
  name: currentName,
  returnName: 'getsetUse',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_COIN_DELETE';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'IDX',
      type: sql.BigInt,
      required: true,
    },
  ],
};
procedureNames['delfeeBook'] = {
  name: currentName,
  returnName: 'getsetUse',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_ADDRESS_USE_CHANGE';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'IDX',
      type: sql.BigInt,
      required: true,
    },
  ],
};
procedureNames['setFeeaddress'] = {
  name: currentName,
  returnName: 'getsetAddress',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_ADDRESS_DELETE';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'IDX',
      type: sql.BigInt,
      required: true,
    },
  ],
};
procedureNames['delfeeaddress'] = {
  name: currentName,
  returnName: 'getsetAddress',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_BOARD_USER_VIEW';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'B_GUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_IDX',
      type: sql.BigInt,
      required: true,
    },
  ],
};
procedureNames['getBoardUserView'] = {
  name: currentName,
  returnName: 'BOARDVIEW',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_TERMS_PRIVACY_LIST';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'T_COUNTRY',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureNames['getTerm'] = {
  name: currentName,
  returnName: 'TERM',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_PASSBOOK_LIST';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER1_TITLE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'SECHER_TEXT',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_CUR_YN',
      type: sql.NChar,
      required: true,
    },
    {
      name: 'SITE_CODE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureNames['getPassBook'] = {
  name: currentName,
  returnName: 'PASSBOOK',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_PASSBOOK_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER1_TITLE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'SECHER_TEXT',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_CUR_YN',
      type: sql.NChar,
      required: true,
    },
    {
      name: 'SITE_CODE',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_FEE_LIST';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER1_TITLE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'SECHER_TEXT',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_CUR_YN',
      type: sql.NChar,
      required: true,
    },
    {
      name: 'SITE_CODE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureNames['getFeeBook'] = {
  name: currentName,
  returnName: 'FEEBOOK',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_FEE_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER1_TITLE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'SECHER_TEXT',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_CUR_YN',
      type: sql.NChar,
      required: true,
    },
    {
      name: 'SITE_CODE',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_ADDR_LIST';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER1_TITLE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'SECHER_TEXT',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_CUR_YN',
      type: sql.NChar,
      required: true,
    },
    {
      name: 'SITE_CODE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureNames['getADDRBook'] = {
  name: currentName,
  returnName: 'ADDRBOOK',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_ADDR_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER1_TITLE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'SECHER_TEXT',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_CUR_YN',
      type: sql.NChar,
      required: true,
    },
    {
      name: 'SITE_CODE',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_MAINCOIN_LIST';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER1_TITLE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'SECHER_TEXT',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_CUR_YN',
      type: sql.NChar,
      required: true,
    },
    {
      name: 'SITE_CODE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureNames['getCOINBook'] = {
  name: currentName,
  returnName: 'COINBOOK',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_MAINCOIN_LIST_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER1_TITLE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'SECHER_TEXT',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_CUR_YN',
      type: sql.NChar,
      required: true,
    },
    {
      name: 'SITE_CODE',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_CURRENCY_LIST';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER1_TITLE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'SECHER_TEXT',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_CUR_YN',
      type: sql.NChar,
      required: true,
    },
    {
      name: 'SITE_CODE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureNames['getCURRENCYBook'] = {
  name: currentName,
  returnName: 'CURRENCYBOOK',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_CURRENCY_LIST_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER1_TITLE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'SECHER_TEXT',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_CUR_YN',
      type: sql.NChar,
      required: true,
    },
    {
      name: 'SITE_CODE',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_TERMS_PRIVACY_SET';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'T_COUNTRY',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'TERMS',
      type: sql.NText,
      required: true,
    },
    {
      name: 'PRIVACY',
      type: sql.NText,
      required: true,
    },
  ],
};
procedureNames['setTerm'] = {
  name: currentName,
  returnName: 'TERM',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SP_ORG_CHART_P';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(50),
      required: true,
    },
  ],
};
procedureNames['getOrgData'] = {
  name: currentName,
  returnName: 'ORGLIST',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_COIN_WITHDRAWAL_LIST_DETAIL';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'IDX',
      type: sql.BigInt,
      required: true,
    },
  ],
};
procedureNames['getWithDetil'] = {
  name: currentName,
  returnName: 'DETAIL',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_BOARD_MAIN_DELETE';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'B_IDX',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureNames['delBoard'] = {
  name: currentName,
  returnName: 'DELBOARD',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_COIN_WALLET_CANCEL';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'IDX',
      type: sql.BigInt,
      required: true,
    },
    {
      name: 'MESSAGE',
      type: sql.NVarChar(500),
      required: true,
    },
  ],
};
procedureNames['cancelWith'] = {
  name: currentName,
  returnName: 'CANCELWITH',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_COIN_INFO';
currentInfo = {
  usingCache: false,
  params: [],
};
procedureNames['AgetCoinInfo'] = {
  name: currentName,
  returnName: 'COININFO',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_SITE_LIST';
currentInfo = {
  usingCache: false,
  params: [],
};
procedureNames['AgetSiteList'] = {
  name: currentName,
  returnName: 'SITELIST',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SP_PRODUCT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.VarChar(50),
      required: true,
    },
  ],
};
procedureNames['getProduct'] = {
  name: currentName,
  returnName: 'PRODUCT',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_TRADE_HIS_DETAIL';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'T_UID',
      type: sql.VarChar(50),
      required: true,
    },
    {
      name: 'T_IDX',
      type: sql.BigInt,
      required: true,
    },
  ],
};
procedureNames['getHisDetail'] = {
  name: currentName,
  returnName: 'HSID',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_USD_INOUT_LIST';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER1_TITLE',
      type: sql.VarChar(50),
      required: true,
    },
    {
      name: 'SECHER_TEXT',
      type: sql.VarChar(100),
      required: true,
    },
    {
      name: 'GUBUN',
      type: sql.VarChar(1),
      required: true,
    },
    {
      name: 'USD_S',
      type: sql.Decimal(18, 2),
      required: true,
    },
    {
      name: 'USD_E',
      type: sql.Decimal(18, 2),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.VarChar(10),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.VarChar(10),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureNames['AgetUSDIOList'] = {
  name: currentName,
  returnName: 'AIOULIST',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_USD_INOUT_LIST_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER1_TITLE',
      type: sql.VarChar(50),
      required: true,
    },
    {
      name: 'SECHER_TEXT',
      type: sql.VarChar(100),
      required: true,
    },
    {
      name: 'GUBUN',
      type: sql.VarChar(1),
      required: true,
    },
    {
      name: 'USD_S',
      type: sql.Decimal(18, 2),
      required: true,
    },
    {
      name: 'USD_E',
      type: sql.Decimal(18, 2),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.VarChar(10),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.VarChar(10),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_BOARD_MAIN_LIST';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER_TEXT',
      type: sql.VarChar(50),
      required: true,
    },
    {
      name: 'SEARCH1_TITLE',
      type: sql.VarChar(1),
      required: true,
    },
    {
      name: 'B_GUBUN',
      type: sql.VarChar(1),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.VarChar(10),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.VarChar(10),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureNames['getBoardMain'] = {
  name: currentName,
  returnName: 'BOARDMAIN',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_BOARD_MAIN_LIST_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER_TEXT',
      type: sql.VarChar(50),
      required: true,
    },
    {
      name: 'SEARCH1_TITLE',
      type: sql.VarChar(1),
      required: true,
    },
    {
      name: 'B_GUBUN',
      type: sql.VarChar(1),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.VarChar(10),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.VarChar(10),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_BOARD_MAIN_LIST';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER_TEXT',
      type: sql.VarChar(50),
      required: true,
    },
    {
      name: 'SEARCH1_TITLE',
      type: sql.VarChar(1),
      required: true,
    },
    {
      name: 'B_GUBUN',
      type: sql.VarChar(1),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.VarChar(10),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.VarChar(10),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureNames['getBoardMain'] = {
  name: currentName,
  returnName: 'BOARDMAIN',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_BOARD_MAIN_LIST_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER_TEXT',
      type: sql.VarChar(50),
      required: true,
    },
    {
      name: 'SEARCH1_TITLE',
      type: sql.VarChar(1),
      required: true,
    },
    {
      name: 'B_GUBUN',
      type: sql.VarChar(1),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.VarChar(10),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.VarChar(10),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_WALLET_CODE_LIST';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'CUR_CODE',
      type: sql.VarChar(10),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureNames['getWalletCodeList'] = {
  name: currentName,
  returnName: 'WALLETCODE',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_WALLET_CODE_LIST_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'CUR_CODE',
      type: sql.VarChar(10),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_MEMBER_PLANT_LIST';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER1_TITLE',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'SECHER_TEXT',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.NVarChar(10),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.NVarChar(10),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureNames['getmemberplantlist'] = {
  name: currentName,
  returnName: 'MEMBER_PLANT',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_MEMBER_PLANT_LIST_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER1_TITLE',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'SECHER_TEXT',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.NVarChar(10),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.NVarChar(10),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_TRADE_HIS';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'TRADE_SECHER',
      type: sql.VarChar(50),
      required: true,
    },
    {
      name: 'TRADE_TEXT',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'TRADE_GUBUN',
      type: sql.VarChar(2),
      required: true,
    },
    {
      name: 'GUBUN',
      type: sql.VarChar(10),
      required: true,
    },
    {
      name: 'CGUBUN',
      type: sql.VarChar(10),
      required: true,
    },
    {
      name: 'DATE_GUBUN',
      type: sql.VarChar(1),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.VarChar(10),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.VarChar(10),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureNames['getTradHis'] = {
  name: currentName,
  returnName: 'TRADHIS',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_TRADE_HIS_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'TRADE_SECHER',
      type: sql.VarChar(50),
      required: true,
    },
    {
      name: 'TRADE_TEXT',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'TRADE_GUBUN',
      type: sql.VarChar(2),
      required: true,
    },
    {
      name: 'GUBUN',
      type: sql.VarChar(10),
      required: true,
    },
    {
      name: 'CGUBUN',
      type: sql.VarChar(10),
      required: true,
    },
    {
      name: 'DATE_GUBUN',
      type: sql.VarChar(1),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.VarChar(10),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.VarChar(10),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_COIN_WITHDRAWAL_LIST';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER1_TITLE',
      type: sql.VarChar(50),
      required: true,
    },
    {
      name: 'SECHER_TEXT',
      type: sql.VarChar(100),
      required: true,
    },
    {
      name: 'GUBUN',
      type: sql.VarChar(1),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.VarChar(10),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.VarChar(10),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureNames['AgetWithdList'] = {
  name: currentName,
  returnName: 'AWITHLIST',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_COIN_WITHDRAWAL_LIST_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER1_TITLE',
      type: sql.VarChar(50),
      required: true,
    },
    {
      name: 'SECHER_TEXT',
      type: sql.VarChar(100),
      required: true,
    },
    {
      name: 'GUBUN',
      type: sql.VarChar(1),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.VarChar(10),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.VarChar(10),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);



currentName = 'SA_PURCHASE_DAEGI_LIST';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER1_TITLE',
      type: sql.VarChar(50),
      required: true,
    },
    {
      name: 'SECHER_TEXT',
      type: sql.VarChar(100),
      required: true,
    },
    {
      name: 'GUBUN',
      type: sql.VarChar(1),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.VarChar(10),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.VarChar(10),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureNames['AgetpurchaseList'] = {
  name: currentName,
  returnName: 'APURCLIST',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_PURCHASE_DAEGI_LIST_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SECHER1_TITLE',
      type: sql.VarChar(50),
      required: true,
    },
    {
      name: 'SECHER_TEXT',
      type: sql.VarChar(100),
      required: true,
    },
    {
      name: 'GUBUN',
      type: sql.VarChar(1),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.VarChar(10),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.VarChar(10),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_PURCHASE_DAEGI_DETAIL';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'P_LOG',
      type: sql.BigInt,
      required: true,
    },
  ],
};
procedureNames['getpurchaseDetil'] = {
  name: currentName,
  returnName: 'PURCHASEDETAIL',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SA_PURCHASE_DAEGI_APPLITION';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'P_LOG',
      type: sql.BigInt,
      required: true,
    },
  ],
};

procedureNames['purchase_application'] = {
  name: currentName,
  returnName: 'PURCHASEAPPLITION',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

exports.procedureInfo = procedureInfo;
exports.procedureNames = procedureNames;
//procedureNames['adminSignin']=currentName
