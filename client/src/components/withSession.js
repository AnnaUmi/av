import React, {Component} from 'react';
import {Query} from 'react-apollo';
import {GET_CURRENT_USER} from '../queries';

export default Component => class withSession extends Component {
    render(){
        return(
            <Query query={GET_CURRENT_USER}>
        {({data, loading, refetch})=>{
            if(loading) return null;
            return(
                <Component {...this.props} refetch={refetch} session={data}/>
            )
        }}
    </Query>
        )
    }
    
}
