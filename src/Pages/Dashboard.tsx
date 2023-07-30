import React, {Component} from "react";
import Wrapper from "../components/wrapper";

interface DashboardProps {
    accessToken: string; // Set the type for accessToken
  }

  class Dashboard extends Component<DashboardProps> {
    render() {
        const { accessToken } = this.props;
        return(
            <Wrapper accessToken={accessToken}>
                <div>
                    <h1>Dashboard</h1>
                </div>
            </Wrapper>
        );
    }
}

export default Dashboard;