import { md } from "@atomico/stories";
import { Button, Input, Icon, InputSwitch, Label, Theme } from "../components";

export const meta = {
    path: "/examples/Login",
};

export default md`
# Examples login

${(
    <Theme>
        <style>
            {`
            .form{
                width: 100%;
                height: 500px;
                display: grid;
                gap: var(--size-s);
                box-sizing: border-box;
                place-content: center;
                background: lavender;
                border-radius:var(--border-radius);
            }
            `}
        </style>
        <form>
            <div class="form">
                <h3>Login</h3>
                <Input placeholder="User" required>
                    <Icon slot="prefix" type="avatar"></Icon>
                </Input>
                <Input placeholder="Password" required>
                    <Icon slot="prefix" type="lock"></Icon>
                </Input>
                <Label>
                    Remember
                    <InputSwitch size="small" slot="action" />
                </Label>
                <div>
                    <Button color="primary">Login</Button>
                    <Button ghost>Register</Button>
                </div>
            </div>
        </form>
    </Theme>
)}
`;
