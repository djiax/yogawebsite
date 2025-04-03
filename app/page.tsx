import Link from "next/link";


export default function Home() {
  return (
    <div>
      <div>Ascension in Body</div>
      <div>A Guide to Unlocking Your Essence</div>


      <div>
        <div>The Nature of Yoga</div>
        <div>It is but a sacred communion between one&apos;s being and mind. To transcend one&apos;s physical limitations and reach the infinite plains of existence within.</div>
      </div>

      <div>
        <div>Dimension of Yoga</div>
        <div>The many forms of the art strive to promote one&apos;s overall wellbeing based their own values.</div>
        <div>Choose Your Path</div>
        <div>
          <Link href={'/physical'}>Physical</Link>
          <Link href={'/anatomical'}>Anatomical</Link>
          <Link href={'/spiritual'}>Spiritual</Link>
          <Link href={'/emotional'}>Emotional</Link>
        </div>  
      </div>
    </div>
  );
}
