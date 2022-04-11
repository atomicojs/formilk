import { c, css } from "atomico";
import {
    Formilk,
    Button,
    Scroll,
    Avatar,
    Tabs,
    Icon,
    Dropdown,
    InputSwitch,
    Label,
} from "../../components";
import tokens from "../../tokens";
import { usePromise } from "@atomico/hooks/use-promise";

const fetchData = async (): Promise<
    {
        full_name: string;
        email: string;
        avatar: string;
    }[]
> => (await fetch("https://example-data.draftbit.com/people?_limit=10")).json();

function app() {
    const [data] = usePromise(fetchData, true);

    return (
        <host shadowDom>
            <div class="app">
                <div class="app-header">
                    <div class="app-header_top">
                        <a
                            href="https://github.com/atomicojs/formilk"
                            target="_blank"
                        >
                            <Formilk contrast width="80px" />
                        </a>
                        <Label>
                            Connected
                            <InputSwitch checked size="small" slot="action" />
                        </Label>
                    </div>
                    <h1>Hi UpperCod</h1>
                </div>
                <div class="app-content">
                    <div class="app-content_header">
                        <h2>Contact</h2>
                        <Button color="neutral" rounded size="small">
                            <Icon type="avatar" slot="prefix" size="xxs" />
                            Add contact
                        </Button>
                    </div>
                    <Scroll>
                        <div class="app-list">
                            {data &&
                                data.map((item) => (
                                    <div class="app-item">
                                        <Avatar>
                                            <img
                                                loading="lazy"
                                                width="40"
                                                height="40"
                                                src={item.avatar}
                                            />
                                        </Avatar>
                                        <div class="app-item_detail">
                                            <strong>{item.full_name}</strong>
                                            <span>{item.email}</span>
                                        </div>
                                        <Button size="small">
                                            <Icon type="love" slot="prefix" />
                                        </Button>
                                    </div>
                                ))}
                        </div>
                    </Scroll>
                </div>
                <div class="app-footer">
                    <Tabs value="home">
                        <Button value="home">
                            <Icon type="home" />
                        </Button>
                        <Button value="gallery">
                            <Icon type="image" />
                        </Button>
                        <Button value="profile">
                            <Icon type="profile" />
                        </Button>
                        <Dropdown value="menu">
                            <Button slot="action" ghost>
                                <Icon type="menu" />
                            </Button>
                            <Button size="small" justify="space-between" ghost>
                                <Icon slot="suffix" type="copy"></Icon> Copy
                            </Button>
                            <Button size="small" justify="space-between" ghost>
                                <Icon slot="suffix" type="drag"></Icon> Move
                            </Button>
                            <Button size="small" justify="space-between" ghost>
                                <Icon slot="suffix" type="config"></Icon> Config
                            </Button>
                        </Dropdown>
                    </Tabs>
                </div>
            </div>
        </host>
    );
}

app.styles = [
    tokens,
    css`
        :host {
            width: 100%;
            height: 100%;
            display: flex;
            background: #f0f4f8;
            padding: var(--size-xl) 0px;
            border-radius: var(--border-radius);
            box-sizing: border-box;
            line-height: 1.2;
        }
        .app {
            margin: auto;
            width: 360px;
            height: 680px;
            max-height: 100%;
            border-radius: 32px;
            display: grid;
            box-shadow: 0px 22px 32px rgba(0, 0, 0, 0.1);
            grid-template: 150px 1fr 60px / 1fr;
            overflow: hidden;
        }
        .app-header {
            background: black;
            margin-bottom: -2rem;
            color: white;
            padding: var(--size-s);
        }
        .app-content {
            padding: var(--size-s);
            background: white;
            box-sizing: border-box;
            border-radius: 2rem;
            overflow: hidden;
        }
        .app-footer {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .app-item {
            display: grid;
            gap: var(--size-s);
            align-items: center;
            justify-content: space-between;
            grid-template-columns: 40px 1fr auto;
        }
        .app-list {
            display: grid;
            gap: var(--size-s);
        }
        .app-item_detail {
            display: grid;
            font-size: var(--size-xxs);
        }
        .app-content_header {
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
        }
        .app-header_top {
            display: grid;
            grid-template-columns: auto 140px;
        }

        @media (max-width: 420px) {
            .app {
                width: 100%;
            }
        }
    `,
];

export const App = c(app);

customElements.define("example-contact-app", App);
