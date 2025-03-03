import { ChildComponent } from './Child';

const Parent = () => {
    return 
        <ChildComponent color='red' onClick={() => console.log('Clicked')}>
            fdf
        </ChildComponent>
};

export default Parent;