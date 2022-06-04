import styles from './index.css'
import React, {Component} from 'react'

import { connect } from 'dva';
import { Card, Divider, Form, Popconfirm, Table } from 'antd';
import Main from './components/Main'
class AdvancedForm extends  Component{
  // 构造函数
  constructor(props) {
    super(props);
    this.state = {
      authList: [
        {
          key : '0',
          name: 'a',
          describe: 'a',
          updateTime: '2017-10-29'
        }
      ],
      tableLoading: false,
      visible: false,
      confirmLoading: false,
    };
  }
  // 组件渲染之前
  componentWillMount() {
    // this.props.getUserInfo()
  }
  // 组件已经被渲染到 DOM 中后运行
  componentDidMount() {
  }
  // 组件卸载
  componentWillUnmount() {
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const {authList} = this.state;
    const columns = [
      {
        title: '角色名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '角色描述',
        dataIndex: 'describe',
        key: 'describe',
      },
      {
        title: '最近编辑时间',
        dataIndex: 'updateTime',
        key: 'updateTime',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
              <a onClick={this.showEditProductModal.bind(this, record)}>配置权限</a>
              <Divider type="vertical" />
              <Popconfirm title={"确定删除该条数据?"} onConfirm={null}>
                <a>删除</a>
              </Popconfirm>
            </span>
        ),
      },
    ];
    return (
      <div style={{ background: '#fff'}}>
        <Card title="权限列表" bordered={false}>
          <Table columns={columns}  dataSource={authList}
                 loading={this.state.tableLoading}
          />
          <Main
            visible={this.state.visible}
            confirmLoading={this.state.confirmLoading}
            handleOk={this.onOk}
            handleCancel={this.onCancel}></Main>
        </Card>
      </div>
    );
  };
  showEditProductModal = (record) => {
    console.log(record);
    this.setState({
      visible: true,
    });
  };
  onOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };
  onCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };
}

const mapStateToProps = (state, props) => {
  return {
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: 'advancedForm' })(AdvancedForm))
