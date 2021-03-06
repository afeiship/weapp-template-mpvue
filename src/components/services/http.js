import NxWeappRequest from 'next-weapp-request';
import nx from 'next-js-core2';
import 'next-content-type';
import 'next-param';

const Http = nx.declare({
  extends: NxWeappRequest,
  methods: {
    getHeaders: function () {
      return {
        'content-type': nx.contentType('urlencoded')
      };
    },
    setResponseInterceptor: function (inMethod, inUrl, inData, inOptions) {
      return inData.data.data;
    },
    setRequestInterceptor: function (inMethod, inUrl, inData, inOptions) {
      return nx.param(inData);
    },
    setErrorInterceptor: function (inMethod, inUrl, inData, inOptions) {
      return inData;
    }
  }
});

export default Http.getInstance();
