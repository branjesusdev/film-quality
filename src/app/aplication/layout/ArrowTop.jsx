import IconArrowUp from '@aplication/components/content/IconArrowUp'
import useIsScrollTop from '@infra/hooks/useIsScrollTop'

function ArrowTop () {
  const fixedElement = 'scroll-top--fixed'
  const { scrollTop: isFixed } = useIsScrollTop({
    elementById: fixedElement,
    positonIdentity: 1600
  })

  const handleTopScroll = () => {
    window.scroll({
      behavior: 'smooth',
      top: 0
    })
  }

  return (
    <div
      onClick={handleTopScroll}
      id={fixedElement}
      className={`${
        isFixed ? 'block' : 'hidden'
      } transition-all fixed bottom-16 right-16 border-custom p-3 rounded-full bg-black-light shadow-md
      cursor-pointer hover:border-[var(--blue-active)] hover:[filter:drop-shadow(0_0_2em_var(--blue-active))]`}
    >
      <IconArrowUp />
    </div>
  )
}

export default ArrowTop
