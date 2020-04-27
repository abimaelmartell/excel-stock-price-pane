import * as React from 'react';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react';

class Loading extends React.Component {
    render() {
        return (
            <div className="spinner">
                <Spinner size={SpinnerSize.large} />
            </div>
        );
    }
}

export default Loading;
