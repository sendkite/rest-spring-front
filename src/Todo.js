import React from 'react';
import { ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: props.item, readOnly: true };
        this.delete = props.delete; // delete 연결
    } 

    deleteEventHandler = () => {
        this.delete(this.state.item);
    }
 
    // 수정을 위한 읽기/수정 모드 이벤트
    offReadOnlyMode = () => {
        console.log("Event!", this.state.readOnly);
        this.setState({ readOnly: false }, () => {
          console.log("ReadOnly? ", this.state.readOnly);
        });
    };

    // 수정 내용 저장 이벤트
    enterKeyEventHandler = (e) => {
        if (e.key === "Enter") {
          this.setState({ readOnly: true });
        }
    };


    render() {
        const item = this.state.item;
        return (
            <ListItem>
                <Checkbox checked={item.done} />
                <ListItemText>
                    <InputBase 
                        onClick={this.offReadOnlyMode}
                        onKeyPress={this.enterKeyEventHandler}
                        inputProps={{ "aria-label": "naked", readOnly: this.state.readOnly }}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                    />
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="Delete Todo"
                        onClick={this.deleteEventHandler}
                    >
                        <DeleteOutlined />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default Todo;

