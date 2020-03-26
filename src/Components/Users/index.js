import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Table, Pagination} from 'antd';
import {UserActions} from '../../Stores/Users/Actions'
import {UserSelectors} from '../../Stores/Users/Selectors'

class UserList extends Component {
    static propTypes = {
        prop: PropTypes,
        getUserList: PropTypes.func,
        userList: PropTypes.object,
    }
    componentDidMount(){
        this.props.getUserList(1)
    }
    handleChange = (page, pageSize) => {
        this.props.getUserList(page)
    }
    render() {
        const { userList } = this.props ;
          const columns = [
            {
              title: 'Name',
              dataIndex: 'firstName',
              key: 'name',
            },
            {
              title: 'Email',
              dataIndex: 'email',
              key: 'email',
            },
          ];
        return (
            <div>
                {/* <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                       {userList.size > 0 ? userList.toJS().data.map((item, index) =>(
                            <tr key={index}>
                                <td>{item.firstName + item.lastName}</td>
                                <td>{item.email}</td>
                            </tr>
                       )) : ''}
                    </tbody>
                </table> */}
                <Table dataSource={userList.toJS().data} columns={columns} />;
                <Pagination defaultCurrent={1} onChange={this.handleChange} total={50} />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    userList: UserSelectors.setUserList(state),
})
const mapDispatchToProps = dispatch => ({
    getUserList: page => dispatch(UserActions.getUser(page)),
})
export default connect(mapStateToProps, mapDispatchToProps)(UserList)
