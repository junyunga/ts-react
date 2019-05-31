import { observable, action } from 'mobx';

class TestStore {
    @observable public isShowMoldal =false;

    @action public hideModal = () => {
        alert("2")
    }
    
}

export default new TestStore();