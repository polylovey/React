import menuAddService from './../services/index';

export default {
  namespace: 'menuAddModel',
  state: {
    // 初始数据
    data: {
    }
  },
  // 用于订阅数据
  subscriptions: {
    setup({ dispatch, history, query }) {
    },
  },
  // 用于获取数据
  effects: {
    // select 此方法用于获取当前或其他 model 的 state
    // call 此方法用于执行一个异步函数，可以理解为等待这个函数执行结束。项目中常用于发送 http 请求，等待服务端响应数据
    // put 此方法用于触发一个 action，这个 action 既可以是一个 reducer 也可以是一个 effect 。
    *addMenuAction({payload, callback}, { call }) {
      const response = yield call (menuAddService.addMenu, payload);
      if (callback && typeof callback === 'function') {
        callback(response); // 返回结果
      }
    },
    *addChildMenuAction({payload, callback}, { call }) {
      const response = yield call (menuAddService.addChildMenu, payload);
      if (callback && typeof callback === 'function') {
        callback(response); // 返回结果
      }
    }
  },
  // 用于修改数据
  reducers: {
  },
};
