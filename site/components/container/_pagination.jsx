export function pagination({ prev, next }) {
    return (
        <div class="pagination" key="pagination">
            <a href={prev && prev.href} class="pagination-pag pagination-prev">
                {prev && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="17"
                    >
                        <path
                            fill="currentColor"
                            d="M1.793 10.024a2 2 0 010-3.048L6.7 2.8A2 2 0 0110 4.325v8.35A2 2 0 016.7 14.2z"
                        />
                    </svg>
                )}
                {prev && prev.label}
            </a>
            <a href={next && next.href} class="pagination-pag pagination-next">
                {next && next.label}
                {next && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="17"
                    >
                        <path
                            fill="currentColor"
                            d="M8.207 6.976a2 2 0 010 3.048L3.3 14.2A2 2 0 010 12.675v-8.35A2 2 0 013.3 2.8z"
                        />
                    </svg>
                )}
            </a>
        </div>
    );
}
